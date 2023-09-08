import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles for the PDF content
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    text: {
        fontSize: 12,
        marginBottom: 10,
    },
});

function PdfDocument() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.text}>POC for Export PDF</Text>
                    <Text>This is a sample PDF export proof of concept.</Text>
                </View>
            </Page>
        </Document>
    );
}

export default PdfDocument;
