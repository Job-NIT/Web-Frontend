import { TYPES } from "~/constants/message";

export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, error) {
    state.list.push(error);
  },
  removeFirst(state) {
    state.list.shift();
  },
};

export const actions = {
  addMessage(context, message) {
    context.commit("add", message);

    setTimeout(() => {
      context.commit("removeFirst");
    }, 3000);
  },
  addSuccessMessage(context, text) {
    const message = {
      type: TYPES.SUCCESS,
      text,
      time: Date.now(),
    };

    context.dispatch("addMessage", message);
  },
  addErrorMessage(context, text) {
    const message = {
      type: TYPES.ERROR,
      text,
      time: Date.now(),
    };

    context.dispatch("addMessage", message);
  },
};
