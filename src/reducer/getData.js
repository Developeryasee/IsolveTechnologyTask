import { createSlice, createEntityAdapter, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { apiConfig } from '../config/apiConfig';



const dataAdapter = createEntityAdapter();
const initialState = dataAdapter.getInitialState({
    status: 'idle',
    error: null,
    productList: null

})

export const dataItems = createAsyncThunk('data/dataItems', async (item) => {
    
    const response = await fetch(apiConfig.getData, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    })
    return response.json();



})



export const getSlices = createSlice({
    name: 'data',
    initialState,
    reducers: {
        searchTerm: (state, action) => {

            state.searchTerm = action.payload;
        }

    },
    extraReducers: {
        [dataItems.pending]: (state, action) => {

            state.status = 'loading'
        },
        [dataItems.fulfilled]: (state, action) => {

            state.status = 'succeeded'
            state.productList = action.payload;

            dataAdapter.removeAll(state);
            const arr=[]

            for (let i = 0; i < action.payload.length; i++) {
                // const element = array[i];
                arr.push({
                    id:i,
                    title:action.payload[i].title,
                    createdDate:action.payload[i].created.substring(0,10),
                    createdTime:action.payload[i].created.substring(11,16),
                    coinsEarned:action.payload[i].coinsEarned,
                    contentImgUrl:action.payload[i].contentImgUrl,
                    hideData:[{
                        createdDate:action.payload[i].created.substring(0,10),
                        createdTime:action.payload[i].created.substring(11,16),
                        updatedDate:action.payload[i].updated.substring(0,10),
                        updatedTime:action.payload[i].updated.substring(11,16),
                        startDate:action.payload[i].visitHistory[0].startTime.substring(0,10),
                        startTime:action.payload[i].visitHistory[0].startTime.substring(11,16),
                        endDate:action.payload[i].visitHistory[0].endTime.substring(0,10),
                        endTime:action.payload[i].visitHistory[0].endTime.substring(11,16),


                    }]
                })
                
            }
            arr.map((node) => dataAdapter.addOne(state, node));

            // console.log(action.payload);


          
        },
        [dataItems.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
});



export default getSlices.reducer;
export const { selectAll: selectAllCart, selectEntities: select } = dataAdapter.getSelectors((state) => state.data);

//

// export const selectItemsForSearch = createSelector(
//   [selectAllItems, (state, searchTerm) => searchTerm],
//   (items, searchTerm) => items.filter((item) => item.name === searchTerm)
// )
// export const selectItemsForSearch = (state) => state.items.filter((item) => item.name.includes(searchTerm));
