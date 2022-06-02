import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalculadoraComponent
      ],
      providers: [
        CalculadoraService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 6 + 2 = 8', () => {
    let btn6 = fixture.debugElement.query(By.css('#btn6'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('8');
  })

  it('deve garantir que 6 - 2 = 4', () => {
    let btn6 = fixture.debugElement.query(By.css('#btn6'));
    let btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('4');
  })

  it('deve garantir que 6 / 2 = 3', () => {
    let btn6 = fixture.debugElement.query(By.css('#btn6'));
    let btnDivisao = fixture.debugElement.query(By.css('#btnDivisao'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDivisao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('3');
  })

  it('deve garantir que 6 * 2 = 12', () => {
    let btn6 = fixture.debugElement.query(By.css('#btn6'));
    let btnMultiplicacao = fixture.debugElement.query(By.css('#btnMultiplicacao'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn6.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMultiplicacao.triggerEventHandler('click', null); 
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('12');
  })
});