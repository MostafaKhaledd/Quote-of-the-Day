var x = 1
function show() {
    x = Math.floor(Math.random() * 10)
    if (x == 0) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`
        document.getElementById("Quote2").innerHTML = "-- Dr. Seuss"
    }
    if (x == 1) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"You only live once, but if you do it right, once is enough."`
        document.getElementById("Quote2").innerHTML = "-- Mae West"
    }
    if (x == 2) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"Be the change that you wish to see in the world."`
        document.getElementById("Quote2").innerHTML = "-- Mahatma Gandhi"
    }
    if (x == 3) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"In three words I can sum up everything I've learned about life: it goes on."`
        document.getElementById("Quote2").innerHTML = "-- Robert Frost"
    }
    if (x == 4) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`
        document.getElementById("Quote2").innerHTML = "-- J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
    if (x == 5) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"Without music, life would be a mistake."`
        document.getElementById("Quote2").innerHTML = "-- Friedrich Nietzsche, Twilight of the Idols"
    }
    if (x == 6) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"If you tell the truth, you don't have to remember anything."`
        document.getElementById("Quote2").innerHTML = "-- Mark Twain"
    }
    if (x == 7) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"A friend is someone who knows all about you and still loves you."`
        document.getElementById("Quote2").innerHTML = "-- Elbert Hubbard"
    }
    if (x == 8) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"To live is the rarest thing in the world. Most people exist, that is all."`
        document.getElementById("Quote2").innerHTML = "-- Oscar Wilde"
    }
    if (x == 9) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"Live as if you were to die tomorrow. Learn as if you were to live forever."`
        document.getElementById("Quote2").innerHTML = "-- Mahatma Gandhi"
    }
    if (x == 10) {
        console.log(x)
        document.getElementById("Quote").innerHTML = `"We accept the love we think we deserve."`
        document.getElementById("Quote2").innerHTML = "-- Stephen Chbosky, The Perks of Being a Wallflower"
    }
}
