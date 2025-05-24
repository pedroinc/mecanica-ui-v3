
import { Box, Button, Container, TextField } from "@mui/material";


export default function CustomerForm() {

    return (
        <>
            <Box className="base-box">
                <Container className="base-container">

                    <Box
                        sx={{ fontSize: 'h5.fontSize', margin: "16px 0" }}>
                        <div>novo cliente</div>
                    </Box>

                    <form>
                        <div>
                            <TextField
                                label="email"
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={form.email}
                            />
                        </div>
                        <div>
                            <TextField
                                label="senha"
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                value={form.password}
                            />
                        </div>
                        <div>
                            <Button
                                type="submit"
                                sx={{ width: "100%", height: "3.2em" }}
                                variant="outlined"
                                onClick={handleSubmitEvent}>
                                Entrar
                            </Button>
                        </div>
                    </form>
                </Container>
            </Box>
        </>
    );
}
