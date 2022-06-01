import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogodaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogodaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogodaVelhaService.showInicio;
  }

  /**
   * Retorna se a tela de tabuleiro deve ser exibida
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogodaVelhaService.showTabuleiro;
  }

  /**
 * Retorna se a tela final deve ser exibida
 * 
 * @return boolean
 */
  get showFinal(): boolean {
    return this.jogodaVelhaService.showFinal;
  }

  /**
   * Inicializa os ddos de um novo jogo
   * 
   * @return void
   */
  iniciarJogo(): void {
    this.jogodaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar em um local no tabuleiro
   * 
   * @param posX number
   * @param posY number
   * @return void
   */
  jogar(posX: number, posY: number): void {
    this.jogodaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada.
   * 
   * @param posX number
   * @param posY number
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogodaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada.
   * 
   * @param posX number
   * @param posY number
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogodaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a a marcação de vitória deve ser exibida para a coordenada informada.
   * 
   * @param posX number
   * @param posY number
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogodaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar
   * 
   * @return number
   */
  get jogador(): number {
    return this.jogodaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   * 
   * @return void
   */
  novoJogo(): void {
    this.jogodaVelhaService.novoJogo();
  }
}