/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        API_URL: string;
    }
}