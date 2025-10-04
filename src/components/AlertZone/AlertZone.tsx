import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { clearAlerts } from 'store/actions/alertActions';

import AlertItem from './partials/AlertItem';

import { MAX_SIMULTANEOUS_ALERTS } from 'Constants';

import type { RootState } from 'store';

export default function AlertZone() {
  const location = useLocation();
  const dispatch = useDispatch();
  const alerts = useSelector((state: RootState) => state.alerts);

  useEffect(() => {
    if (alerts && alerts.length > 0 && !location.state?.keepAlerts) {
      dispatch(clearAlerts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, dispatch]);

  if (alerts.length === 0) return null;

  return (
    <div className="container">
      <div className="AlertZone mt-3">
        {alerts.slice(0, MAX_SIMULTANEOUS_ALERTS).map((data) => (
          <AlertItem key={data.id} {...data} />
        ))}
        {alerts.length > MAX_SIMULTANEOUS_ALERTS && (
          <div className="text-end text-small text-muted mb-2">
            {MAX_SIMULTANEOUS_ALERTS} / {alerts.length}
          </div>
        )}
      </div>
    </div>
  );
}
