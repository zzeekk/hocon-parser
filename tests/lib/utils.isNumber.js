test.func (_.isNumber)
    .should ("return true when @v = %j is a number")
        .given (1)
        .given (1.3, "number")
        .given (Infinity)
        .given (-1)
        .returns (true)

    .should ("return true when @v = %j can be cast to a number")
        .given ("1")
        .given ("20")
        .given ("0")
        .given ("3.5")
        .given ("1e3")
        .returns (true)

    .should ("return false when @v = %j is not number")
        .given (null)
        .given (undefined)
        .given ("")
        .given ([])
        .given ('abc')
        .returns (false)
;