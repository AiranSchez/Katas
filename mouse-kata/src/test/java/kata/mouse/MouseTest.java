package kata.mouse;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;


import static kata.mouse.State.PRESSED;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

class MouseTest {
    @Test
    void shouldNotifyUserWhenLeftButtonIsClicked() {
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.pressLeftButton(0);

        verify(basicEvent).handleMouseEvent(MouseEventType.Pressed);
    }

    @Test
    void shouldChangeStatusWhenLeftButtonIsClicked() {
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.pressLeftButton(0);

        assertEquals(PRESSED, mouse.state());
    }

    @Test
    void shouldNotifyUserWhenLeftButtonIsReleased() {
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.releaseLeftButton(0);

        verify(basicEvent).handleMouseEvent(MouseEventType.Released);
    }

    @Test
    void shouldChangeStatusWhenLeftButtonIsReleased() {
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.releaseLeftButton(0);

        assertEquals(State.RELEASED, mouse.state());
    }

    @Test
    void shouldNotifyUserWhenMouseIsDragging(){
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.pressLeftButton(0);
        mouse.move(new Position(0,0), new Position(1,1), 300);

        verify(basicEvent).handleMouseEvent(MouseEventType.Drag);
    }

    @Test
    void shouldUpdateStateWhenIsDragging(){
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.pressLeftButton(0);
        mouse.move(new Position(0,0), new Position(1,1), 300);

        assertEquals(State.DRAGGING, mouse.state());
    }

    @Test
    void shouldNotifyUserWhenMouseIsMoving(){
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.move(new Position(0,0), new Position(1,1), 300);

        verify(basicEvent).handleMouseEvent(MouseEventType.Move);
    }

    @Test
    void shouldUpdateStateWhenIsMoving(){
        BasicEvent basicEvent = Mockito.spy(BasicEvent.class);
        Mouse mouse = new Mouse();

        mouse.subscribe(basicEvent);
        mouse.move(new Position(0,0), new Position(1,1), 300);

        assertEquals(State.MOVING, mouse.state());
    }

}