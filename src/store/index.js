import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	title:"回家看看",
	keywords:"没救了",
	description:"结婚"
}

export function createStore (){
	return new Vuex.Store({
		state,
		actions,
		mutations
	})
}