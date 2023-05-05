package kata.mouse;

import java.util.ArrayList;
import java.util.List;


class Mouse {
    private List<MouseEventListener> listeners = new ArrayList<>();
    private final long timeWindowInMillisecondsForDoubleClick = 500;
    private State state = State.STOPPED;

    public void pressLeftButton(long currentTimeInMilliseconds){
        updateState(State.PRESSED);
        notifySubscribers(MouseEventType.Pressed);
    }

    private void updateState(State state) {
        this.state = state;
    }

    public void releaseLeftButton(long currentTimeInMilliseconds){
        updateState(State.RELEASED);
        notifySubscribers(MouseEventType.Released);
    }
    public void move(Position from, Position to, long currentTimeInMilliseconds){
        if (state == State.PRESSED || state == State.DRAGGING) {
            updateState(State.DRAGGING);
            notifySubscribers(MouseEventType.Drag);
            return;
        }

        updateState(State.MOVING);
        notifySubscribers(MouseEventType.Move);
    }
    public void subscribe(MouseEventListener listener){
        listeners.add(listener);
    }
    private void notifySubscribers(MouseEventType eventType) {
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