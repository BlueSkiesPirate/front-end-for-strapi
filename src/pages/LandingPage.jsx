import { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLandingPage = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/landing-page`

                );


                setPageData(res.data.data);
            } catch (error) {
                console.error("Error fetching landing page:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLandingPage();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!pageData) return <p>No data found</p>;

    return (
        <div style={{ padding: "2rem" }}>
            <h1>{pageData.title}</h1>
            <img src={`http://localhost:1337${pageData.image.url}`} />
            <p>{pageData.description}</p>

            {/* Render blocks dynamically */}
            {pageData.blocks?.map((block, index) => (
                <div key={index} style={{ marginTop: "2rem" }}>
                    <h2>{block.heading}</h2>
                    {block.text && <p>{block.text}</p>}
                    {block.image?.data && (
                        <img
                            src={`http://localhost:1337${block.image.data.attributes.url}`}
                            alt={block.image.data.attributes.alternativeText || ""}
                            style={{ maxWidth: "400px", borderRadius: "8px" }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default LandingPage;
