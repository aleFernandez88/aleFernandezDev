import { TitleInformation } from '../components/TitleInformation';
import CardInformation from '../components/CardInformation';
import SkillsProgress from "../components/SkillsProgress"
import { Box } from '@mui/material';


export const SobreMi = () => {

    return (
        <Box className="sobreMi" marginBottom={"100px"}>
            <TitleInformation
                title={"sobre mi"}
                subtitle={"conoceme un poco"}
            />
            <CardInformation />
            <SkillsProgress />
        </Box>
    )
}
