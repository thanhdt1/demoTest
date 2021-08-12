import {all, AllEffect, call, ForkEffect, spawn} from 'redux-saga/effects';
import loginSaga from './sagas';

function* filmsRootSaga(): Generator<AllEffect<ForkEffect<void>>, void> {
  const sagas = [loginSaga];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}

export default filmsRootSaga;
