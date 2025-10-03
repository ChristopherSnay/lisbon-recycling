import { useStreet } from '../context/StreetContext';
import useStreets from '../hooks/useStreets';

export default function MainPage() {
  const { streetId } = useStreet();
  const { streets } = useStreets();
  const street = streets.find((s) => s.id === streetId);
  return <div>Main Page - Selected Street: {street?.name}</div>;
}
