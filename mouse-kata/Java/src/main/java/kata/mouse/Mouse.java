package kata.mouse;

import rx.Observable;

import java.awt.event.MouseEvent;
import java.util.ArrayList;
import java.util.List;


class Mouse {
    private Observable<MouseEventType> events = Observable.from(new ArrayList<>());
    private List<MouseEventListener> listeners = new ArrayList<>();
    private final long timeWindowInMillisecondsForDoubleClick = 500;
    private State state = State.STOPPED;

    public void pressLeftButton(long currentTimeInMilliseconds){
        updateState(State.PRESSED);
    }

    private void updateState(State state) {
        this.state = state;
    }

    public void releaseLeftButton(long currentTimeInMilliseconds){
        if (this.state == State.PRESSED){
            updateState(State.RELEASED);
            notifySubscribers(MouseEventType.SingleClick);
        }
    }
    public void move(Position from, Position to, long currentTimeInMilliseconds){
        if (state == State.PRESSED || state == State.DRAGGING) {
            updateState(State.DRAGGING);
            notifySubscribers(MouseEventType.Drag);
        } else {
            updateState(State.MOVING);
            notifySubscribers(MouseEventType.Move);
        }
    }
    public void subscribe(MouseEventListener listener){
        events.subscribe(event -> listener.handleMouseEvent(event));

    }
    private void notifySubscribers(MouseEventType eventType) {
        events.notify();
        listeners.forEach(listener -> listener.handleMouseEvent(eventType));
    }

    public State state() {
        return state;
    }
}
enum MouseEventType {
    SingleClick,
    DoubleClick,
    TripleClick,
    Drag,
    Pressed, Released, Move, Drop
}
interface MouseEventListener {
    void handleMouseEvent(MouseEventType eventType);
}

class BasicEvent implements MouseEventListener {
    @Override
    public void handleMouseEvent(MouseEventType eventType) {
        System.out.println("Event: " + eventType);
    }
}