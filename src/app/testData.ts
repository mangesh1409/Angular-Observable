import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
               const data = [
                  { id: 1, name: 'Windstorm' },
                  { id: 2, name: 'Bombasto' },
                  { id: 3, name: 'Magneta' },
                  { id: 4, name: 'Tornado' },
                  { id: 5, name: 'Harry' },
                  ];

               return { hero: data };
              //  return { hero };
  }
}
