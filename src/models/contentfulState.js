const loadContentful = require('../load-contentful');

const contentfulState = {
  state: {
    about: null,
    webapps: null,
    projects: null,
    resume: null
  },
  reducers: {
    loadEntry: (state, {page, entry}) => {
      console.log(`loading ${page} page:`, entry)
      return Object.assign({}, state, {[page]: entry})
    }
  },
  effects: {
    loadContentful: (state, data, send, done) => {
      console.log('loading contentful')
      loadContentful(send, 'loadEntry', done)
    }
  }
};

const actionList = Object.keys(contentfulState.reducers).concat(Object.keys(contentfulState.effects));
const actions = actionList.reduce((actionObject, action) => {
  const newAction = {};
  newAction[action] = action;
  return Object.assign({}, actionObject, newAction);
}, {});

module.exports = {
  state: contentfulState.state,
  reducers: contentfulState.reducers,
  effects: contentfulState.effects,
  actions
}
