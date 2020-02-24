let main = new MainRenderer();
let bambang = new Bambang(main, 20,main.getSize()[1]/2-10);
main.setPlayer(bambang);
let pipes = new PipeContainer(main, 3);
main.addRenderObject(pipes);
let bg = new ParallaxBackground(main);
main.setBackground(bg);
let el = new EventListener(main);
el.addListener(bambang);
main.addRenderObject(bambang);
main.load(()=>{
  main.InitGame();
  main.start();
});