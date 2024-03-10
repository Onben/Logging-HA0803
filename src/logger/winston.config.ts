import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as dotenv from 'dotenv';

dotenv.config();

const logLevel = process.env.LOG_LEVEL || 'debug';

const customLevels = {
levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4
},
colors: {
    fatal: 'red',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
}
};


const transports = [new winston.transports.Console({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message, context, trace , meta}) => {
        return `${timestamp} [${context}] ${level}: ${message}${trace ? `\n${trace}${meta}` : ''}`;
        }),
        ),
    }),];


export const logger = winston.createLogger({
    
    levels: customLevels.levels,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize({ all: true })
        )
        })
    
    ],
    level: logLevel 
});

