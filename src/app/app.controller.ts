import { Controller, Get } from '@nestjs/common';

@Controller()
export default class AppController {
    @Get()
    index() {
        return 'app:default';
    }
}
