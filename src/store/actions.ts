export default {
    updateUser({ commit, getters }: any, payload: any): void {
        const user = getters.getUser;
        commit('getUser', payload)
    },
    updateUser2(context: any, payload: any): void {
        context.commit('getUser', payload)
    }
}