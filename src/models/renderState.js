const renderState = {
  state: {
    paused: true
  },
  reducers: {
    pause: (state) => {
      return Object.assign({}, state, {paused: true});
    },
    unpause: (state) => {
      return Object.assign({}, state, {paused: false});
    }
  },
  effects: {
    rerender: (state, delay, send, done) => {
      setTimeout(() => {
        send('unpause', '', done);
      }, delay);
    }
  }
};

const actionList = Object.keys(renderState.reducers).concat(Object.keys(renderState.effects));
const actions = actionList.reduce((actionObject, action) => {
  const newAction = {};
  newAction[action] = action;
  return Object.assign({}, actionObject, newAction);
}, {});

module.exports = {
  state: renderState.state,
  reducers: renderState.reducers,
  effects: renderState.effects,
  actions: actions
}
