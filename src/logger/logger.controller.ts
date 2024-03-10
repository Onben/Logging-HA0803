import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('logger')
export class LoggerController {
constructor(private readonly logger: LoggerService) {}

@Get('info')
getInfoLog() {
    this.logger.log(
    'This is an info message',
    );
    return 'Logged an INFO message.';
}

@Get('error')
getErrorLog() {
    this.logger.error(
    'This is an error message',
    null,
    );
    return 'Logged an ERROR message.';
}

@Get('debug')
getDebugLog(){
    this.logger.debug(
    'This is a debug message',
    );
    return 'Logged an DEBUG message.';
}

@Get('fatal')
getFatalLog() {
    this.logger.error('This is a FATAL message',
    null);
    return 'Logged a FATAL message.';
}

@Get('warn')
getWarnLog(){
    this.logger.warn(
    'This is a warn messagee',
    );
    return 'Logged an WARN message.';
}

}