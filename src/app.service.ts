import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <script 
        src='//eu.fw-cdn.com/11031462/400576.js'
        chat='true'
        widgetId='06890482-de27-44b4-a319-f34875964f14'>
      </script>
    `;
  }
}
