import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '@/common/history';
import Bground from '@/components/Bground';
const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ '@/pages/NotFound'));
const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/pages/Home'));
const Course = lazy(() => import(/* webpackChunkName: "course" */ '@/pages/Course'));

export default function Routers() {
  return (
    <Suspense fallback={<Bground />}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/course">
            <Course />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}
