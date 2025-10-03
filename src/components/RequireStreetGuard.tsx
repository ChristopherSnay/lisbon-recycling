import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useStreet } from '../context/StreetContext';

interface RequireStreetGuardProps {
  children: ReactNode;
}
export default function RequireStreetGuard(props: Readonly<RequireStreetGuardProps>) {
  const { streetId } = useStreet();
  if (streetId === null) {
    return <Navigate to="/street" replace />;
  }
  return <>{props.children}</>;
}
