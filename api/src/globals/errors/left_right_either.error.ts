export type Either<L, R> = Left<L, R> | Right<L, R>;

class Left<L, R> {
    value: L;
    constructor(value: L) {
        this.value = value;
    }
    isLeft(): this is Left<L, R> {
        return true;
    }
    isRight(): this is Right<L, R> {
        return false;
    }
}

class Right<L, R> {
    value: R;
    constructor(value: R) {
        this.value = value;
    }
    isLeft(): this is Left<L, R> {
        return false;
    }
    isRight(): this is Right<L, R> {
        return true;
    }
}

function left<L, R>(l: L): Either<L, R> {
    return new Left(l);
}
function right<L, R>(r: R): Either<L, R> {
    return new Right(r);
}

export { left, right };