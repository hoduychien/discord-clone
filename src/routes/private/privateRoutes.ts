import { type IRoute } from '@/@types/routes';
import homeRoutes from '@/features/Home/routes';

const privateRoutes: IRoute[] = [...homeRoutes];

export default privateRoutes;
