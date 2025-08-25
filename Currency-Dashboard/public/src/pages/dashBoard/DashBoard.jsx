import DashboardLay from "../../componrnts/DashboardLay.jsx"
import PortfolSection from "./components/PortfolSection.jsx"
import PriceSection from "./components/PriceSection.jsx"
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./components/Transaction.jsx";
import InfoCard from "./components/InfoCard.jsx";

const DashBoard = () => {
    return (
        <DashboardLay title="Dashboard">
            <Grid gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                xl: "repeat(2, 1fr)",
            }}
                gap="6" >

                <GridItem colSpan={{
                    base: 1,
                    xl: 2
                }}>
                    <PortfolSection />
                </GridItem>

                <GridItem colSpan={1}>
                    <PriceSection />
                </GridItem>

                <GridItem colSpan={1}>
                    <Transaction />
                </GridItem>

                <GridItem colSpan={1}>
                    <InfoCard
                        i imgUrl="/dot_bg.svg"
                        text=" Learn more about Loans – Keep your Bitcoin, access it’s value without  selling it"
                        tagText="Loan"
                        inverted={false}
                    />
                </GridItem>

                <GridItem colSpan={1}>
                    <InfoCard
                        inverted={true}
                        tagText="Contact"
                        imgUrl="/grid_bg.svg"
                        text="Learn more about our real estate, mortgage, and  corporate account services" />
                </GridItem>



            </Grid>


        </DashboardLay>
    )
}

export default DashBoard
