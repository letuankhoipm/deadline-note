import { createStore } from "vuex";
import actions from './actions';
import state from './states';
import getters from './getters';
import mutations from './mutations';
import modules from './modules';

export default createStore({
  state,
  mutations,
  getters,
  actions,
  modules,
});

// state: noi luu du lieu tai store
// mutation: là những hàm thay đổi giá trị và thêm dữ liệu vào store <=> reducer (mapMutations) => chuyển hàm về comp dùng nó
// getters: là những hàm lấy giá trị trong store ra (mapGetter) => chuyển giá trị của state về comp dùng nó
// actions: hanh dong vi du nhu login (getActions) => chuyen ham ve comp dung no
//  context: store ở thời điểm chạy cái hàm đang gọi (chua ham commit)/ chưá tất cả mọi thứ của store ở thời điểm đó
//      updateUser({commit}): void {
//          commit('ten ham' , payload)
//        }        