// 게임 캐릭터 클래스 만들기

// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 파이어볼이 
// 출력되게 만드시오. 주어진 코드를 수정하면 안됩니다.

const Wizard = class Wizard{
     constructor(health,mana,armor) {
          // 생성자
          this.health = health;
          this.mana = mana;
          this.armor = armor;
     } attack() {
          console.log('파이어볼');
     }
}

const x = new Wizard(545,210,10);
console.log(x.health, x.mana, x.armor);
x.attack();

