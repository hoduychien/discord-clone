import { type IRoute } from '@/@types/routes';
import authenRoutes from '@/features/Authentication/routes';

const publicRoutes: IRoute[] = [...authenRoutes];

export default publicRoutes;
