import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';
import { Button } from '@mui/material';

function PdfExport() {
    return (
        <div>
            <PDFDownloadLink document={<PdfDocument />} fileName="document.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? (
                        'Loading document...'
                    ) : (
                        <Button variant="contained" color="primary" download>
                            Export PDF
                        </Button>
                    )
                }
            </PDFDownloadLink>
        </div>
    );
}

export default PdfExport;
