import swaggerUi from 'swagger-ui-express';
import swaggereJsdoc from 'swagger-jsdoc';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'DeuliGo',
            version: '1.0.0',
            description: 'DeuliGo API 문서',
        },
        servers: [
            {
                url: 'localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggereJsdoc(options);

export { swaggerUi, specs };
