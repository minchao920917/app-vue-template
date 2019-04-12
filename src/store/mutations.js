const GET_WATERDATA = 'GET_WATERDATA'
const SUB_MIT = 'SUB_MIT'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_DETAILDATA = 'GET_DETAILDATA'
const GET_DETAILWATER = 'GET_DETAILWATER'
const GET_INDEXDATA = 'GET_INDEXDATA'
const GET_MOREDETAILWATER = 'GET_MOREDETAILWATER'
const GET_MOREINDEXWATER = 'GET_MOREINDEXWATER'
export default {
	[GET_WATERDATA](state, payload) {
		if (payload.res.code == 200){
				state.wateritem = payload.res.msg.records;
				if (payload.res.msg.records.length < state.pageSize){
					state.indexEnd = true;
			}
		 }
	}
	
}