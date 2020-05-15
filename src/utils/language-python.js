const fourSpaces = " ".repeat(4);
const eightSpaces = fourSpaces.repeat(2);

function parseColor(color) {
    return `0x${color.substr(1)}`
}

function maybeShortern(st) {
    return st.replace(/([^\n]{1,60})/g, `\n${eightSpaces}"$1"`)
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
        if (author.icon_url) {
            stringToReturn += `\n${fourSpaces}name="${author.name}"`;
            stringToReturn += `,\n${fourSpaces}url="${author.url}"`
            stringToReturn += `,\n${fourSpaces}icon_url="${author.icon_url}"`
            stringToReturn += "\n)"
        } else {
            stringToReturn += `\n${fourSpaces}name="${author.name}"`;
            stringToReturn += `,\n${fourSpaces}url="${author.url}"`
            stringToReturn += "\n)"
        }
    } else {
        if (author.icon_url) {
            stringToReturn += `\n${fourSpaces}name="${author.name}"`;
            stringToReturn += `,\n${fourSpaces}icon_url="${author.icon_url}"`
            stringToReturn += "\n)"
        }
        if (!author.url && !author.icon_url) {
            stringToReturn += `name="${author.name}"`;
            stringToReturn += ")"
        }
    }
    return stringToReturn;
}

function getFooter(embed) {
    const text = embed.footer.text;
    const icon_url = embed.footer.icon_url
    var stringToReturn = "";

    var textPy = `text="${text}"`;
    var iconUrlPy = `icon_url="${icon_url}"`;

    if (text) {
        if (icon_url) {
            stringToReturn += `\n${fourSpaces}${textPy}\n${fourSpaces}${iconUrlPy}\n${fourSpaces}`
        } else {
            stringToReturn += textPy
        }
    }
    return stringToReturn;

}

function getFields(embed) {
    var stringToReturn = "";
    var lineBreakRe = (/[\r\n]+/g, "\\n");

    embed.fields.forEach(function(field, idx) {
        field.value.replace(lineBreakRe, "\\n"); // sanitise carriage returns
        var fieldValueCopy = (field.value.length > 60 ? maybeShortern(field.value) : `"${field.value}"`)
        stringToReturn += (
            `embed.add_field(\n${fourSpaces}name="${field.name}",\n${fourSpaces}value=${fieldValueCopy})`
        )

        if (idx != 1) stringToReturn += "\n"; // last iteration, no need to line break

    });
    return stringToReturn;
}

export function getPythonPrettyPrinted(embed) {

    var embedMain = getEmbedMain(embed);
    var embedString = `embed = discord.Embed(${embedMain})`;

    if (embed.url) {
        embedString += `\nembed.url = "${embed.url}"`
    }

    if (embed.thumb_url) {
        embedString += `\nembed.set_thumbnail(url="${embed.thumb_url}")`
    }

    if (embed.author.name) {
        embedString += "\n" + getAuthor(embed);
    }

    if (embed.fields.length > 0) {
        embedString += "\n" + getFields(embed)
    }

    if (embed.footer.text) {
        let footerPy = getFooter(embed);
        embedString += `\nembed.set_footer(${footerPy})`;
    }



    return embedString;
}