const fourSpaces = " ".repeat(4);
const eightSpaces = fourSpaces.repeat(2);

function parseColor(color) {
    return `0x${color.substr(1)}`
}

function getEmbedMain(embed) {
    var descriptionCopy = embed.description.replace(/[\r\n]+/g, "\\n")
    var stringToReturn = "";
    if (embed.description.length > 60) {
        var short = descriptionCopy.replace(/([^\n]{1,60})/g, `\n${eightSpaces} "$1"`)
        var description = `${fourSpaces}description=(${short}\n${fourSpaces})`
        var title = `\n${fourSpaces}title="${embed.title}", \n`
        stringToReturn = `${title}${description},\n`
    } else {
        stringToReturn = `title="${embed.title}", description="${descriptionCopy}"`
    }
    if (embed.color) {
        stringToReturn += `, color=${parseColor(embed.color)}`
    }
    return stringToReturn;
}

function getAuthor(embed) {
    const author = embed.author;
    var stringToReturn = "embed.set_author(";

    if (author.url) {
        if (author.icon) {
            stringToReturn += `\n${fourSpaces}name="${author.name}"`;
            stringToReturn += `,\n${fourSpaces}url="${author.url}"`
            stringToReturn += `,\n${fourSpaces}icon_url="${author.icon}"`
            stringToReturn += "\n)"
        } else {
            stringToReturn += `\n${fourSpaces}name="${author.name}"`;
            stringToReturn += `,\n${fourSpaces}url="${author.url}"`
            stringToReturn += "\n)"
        }
    } else {
        if (author.icon) {
            stringToReturn += `\n${fourSpaces}name="${author.name}"`;
            stringToReturn += `,\n${fourSpaces}icon_url="${author.icon}"`
            stringToReturn += "\n)"
        }
        if (!author.url && !author.icon) {
            stringToReturn += `name="${author.name}"`;
            stringToReturn += ")"
        }
    }
    return stringToReturn;
}

export function getPythonPrettyPrinted(embed) {

    var embedMain = getEmbedMain(embed);
    var embedString = `embed = discord.Embed(${embedMain})`
    if (embed.author.name) {
        embedString += "\n" + getAuthor(embed);
    }
    console.log(embedString);
    return embedString;
}