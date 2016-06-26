import { ReduceStore } from 'flux/utils'
import AppDispatcher from '../dispatcher/AppDispatcher'
import Immutable from 'immutable'

class ArticleStore extends ReduceStore {
  getInitialState() {
    return []
  }

  reduce(state, action) {
    switch (action.type) {
      case 'create'
        return state
      case 'update'
        return state
      default:
        return state
    }
  }
}

export default new ArticleStore(AppDispatcher)
