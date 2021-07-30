import { takeEvery, put, call } from 'redux-saga/effects'
import { setLoaded, setPizzas } from './actions/pizzas'
import { fetchPizzasApi } from './api'

export function* watchFetchPizzas() {
  yield takeEvery('FETCH_PIZZAS', fetchPizzas)
}

export function* fetchPizzas({ payload }) {
  const { category, sortBy } = payload

  yield put(setLoaded(false))

  const pizzas = yield call(fetchPizzasApi, category, sortBy)

  yield put(setPizzas(pizzas))
}