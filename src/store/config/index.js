import configureStoreDev from './dev';
import configureStoreProd from './prod';

const IS_DEV = process.env.NODE_ENV === 'development';

const selectedConfigureStore = !IS_DEV ? configureStoreProd : configureStoreDev;

export const { config } = selectedConfigureStore;