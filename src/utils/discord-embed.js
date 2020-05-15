export function getFieldWidth(field, fieldIndex) {
    const FIELD_GRID_SIZE = 12;
    const MAX_FIELDS_PER_ROW = 3;

    if (!field.inline) return `1 / ${FIELD_GRID_SIZE + 1}`;

    let startingField = fieldIndex;
    while (startingField > 0 && this.embed.fields[startingField - 1].inline) {
        startingField -= 1;
    }

    let totalInlineFields = 0;
    while (
        this.embed.fields.length > startingField + totalInlineFields &&
        this.embed.fields[startingField + totalInlineFields].inline
    ) {
        totalInlineFields += 1;
    }

    const indexInSequence = fieldIndex - startingField;
    const currentRow = indexInSequence / MAX_FIELDS_PER_ROW;
    const indexOnRow = indexInSequence % MAX_FIELDS_PER_ROW;
    const totalOnLastRow =
        totalInlineFields % MAX_FIELDS_PER_ROW || MAX_FIELDS_PER_ROW;
    const fullRows =
        (totalInlineFields - totalOnLastRow) / MAX_FIELDS_PER_ROW;
    const totalOnRow =
        currentRow >= fullRows ? totalOnLastRow : MAX_FIELDS_PER_ROW;

    const columnSpan = FIELD_GRID_SIZE / totalOnRow;
    const start = indexOnRow * columnSpan + 1;
    const end = start + columnSpan;

    return `${start} / ${end}`;
}