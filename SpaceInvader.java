import com.badlogic.gdx.ApplicationAdapter;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.GL20;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.graphics.g2d.BitmapFont;
import com.badlogic.gdx.math.Rectangle;
import com.badlogic.gdx.utils.Array;
import com.badlogic.gdx.utils.TimeUtils;

public class SpaceInvadersGame extends ApplicationAdapter {
    private SpriteBatch batch;
    private Texture spaceshipImg;
    private Array<Rectangle> enemyShips;
    private long lastEnemyTime;
    private int score;
    private BitmapFont font;

    @Override
    public void create() {
        batch = new SpriteBatch();
        spaceshipImg = new Texture("spaceship.png"); // Replace with your spaceship image
        enemyShips = new Array<Rectangle>();
        spawnEnemyShip();

        font = new BitmapFont();
        score = 0;
    }

    @Override
    public void render() {
        Gdx.gl.glClearColor(0, 0, 0, 1);
        Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT);

        if (Gdx.input.isTouched()) {
            Rectangle spaceship = new Rectangle();
            spaceship.x = Gdx.input.getX() - 64 / 2; // Adjust for your spaceship's width
            spaceship.y = 20;
            spaceship.width = 64; // Adjust for your spaceship's width
            spaceship.height = 64; // Adjust for your spaceship's height

            if (spaceship.overlaps(enemyShips.get(0))) {
                score++;
                enemyShips.removeIndex(0);
                spawnEnemyShip();
            }
        }

        batch.begin();
        for (Rectangle enemy : enemyShips) {
            batch.draw(spaceshipImg, enemy.x, enemy.y);
        }
        font.draw(batch, "Score: " + score, 10, 460);
        batch.end();
    }

    private void spawnEnemyShip() {
        Rectangle enemy = new Rectangle();
        enemy.x = MathUtils.random(0, 800 - 64); // Adjust for your screen width
        enemy.y = 480; // Adjust for your screen height
        enemy.width = 64; // Adjust for your enemy's width
        enemy.height = 64; // Adjust for your enemy's
