async function press_keys(string) {
    var string_for_keys = ""
    for(var i = 0; i < string.length; i++ ){
        string_for_keys = string_for_keys + string[i] + " "
    }
    console.log(string_for_keys)
}

press_keys("hello")