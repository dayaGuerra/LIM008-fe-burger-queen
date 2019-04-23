import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Observable } from 'rxjs/Rx';
import { DataApiService } from './data-api.service';

const input: object[] = [
  {
    cliente: '',
    mesa: '',
    fecha: 0,
    productos : [],
    totalSectionOrder: 0,
    orden:0
  }
];

//const data = Observable.from(input);

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(input)
}

const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
}

describe('DataApiService', () => {
  let service: DataApiService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataApiService,
        { provide: AngularFirestore,
          useValue: angularFirestoreStub }
      ]
    });

    service = TestBed.get(DataApiService);
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    // const service: DataApiService = TestBed.get(DataApiService);
    expect(service).toBeTruthy();
  });

});
