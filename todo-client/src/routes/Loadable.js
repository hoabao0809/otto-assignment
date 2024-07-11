import { Suspense } from 'react';
// components
import LoadingScreen from '../components/LoadingScreen';

export const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};