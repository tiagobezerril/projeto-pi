//Sensor de gás utilizando MQ2.

const int PINO_SENSOR_MQ2 = A2;//Saida do sensor na A2.

const int VALOR_MINIMO = 100; //Valor minimo recebido pelo Arduino.
const int VALOR_MAXIMO = 1000; //Valor maximo recebido pelo Arduino.

void setup() {
  Serial.begin(9600); //Inicia a comunicação serial.
}

//Função que será ligada continuamente ao executar ou resetar o Arduino.
void loop() {
  int ValorSensor = analogRead(PINO_SENSOR_MQ2); 
//Calculo  da porcentagem de gás.
  float porcentagem = ((float)(ValorSensor - VALOR_MINIMO)/(VALOR_MAXIMO - VALOR_MINIMO)) * 100; 
//Impede a porcentagem ser menor do que 0 ou maior do que 100.
if (porcentagem < 0) { 
  porcentagem = 0;
} else if (porcentagem > 100){
  porcentagem = 100;
}

Serial.print("Valor de Saída do Sensor:"); 
Serial.print(ValorSensor);
Serial.print(" -> porcentagem:");
Serial.print(porcentagem);
Serial.println("%");

delay(1000);
}
