import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';

config();

module.exports = {
    plugins: [
        new EnvironmentPlugin(['userId','serviceId', 'templateId'
        ])
    ]
}