import './HeadMenu.css'
import {Grid, Button, ButtonGroup, TextField, Menu, MenuItem, Link} from "@material-ui/core"
import {DropdownButton, Dropdown, Table} from 'react-bootstrap'
import logo from './images/logo-01.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function HeadMenu() {
    return (
        <div id="head-menu">
            <Grid container>
                <Grid item md={3} sm={12} xs={12}>
                    <div id="logo">
                        <Link href="/"><img src={logo} alt="logo" /></Link>
                    </div>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <ButtonGroup id="head-menu-content">
                        <div class="head-menu-button"><Button>Trang chủ</Button></div>
                        <DropdownButton title="Dịch vụ">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Dịch vụ trong nước</th>
                                        <th>Dịch vụ quốc tế</th>
                                        <th>Dịch vụ logistics</th>
                                        <th>Dịch vụ TMĐT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Dropdown.Item  href="/vcn">Chuyển phát nhanh(VCN)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Chuyển phát quốc tế chỉ định hãng(DHL)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Dịch vụ hải quan(VLQ)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Dịch vụ bán vé máy bay (VTBay)</Dropdown.Item></td>
                                    </tr>
                                    <tr>
                                        <td><Dropdown.Item href='/vtk'>Chuyển phát tiết kiệm(VTK)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Chuyển phát quốc tế chỉ định hãng(UPS)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Dịch vụ foward nhanh(VLF)</Dropdown.Item></td>
                                    </tr>
                                    <tr>
                                        <td><Dropdown.Item href="/vht4">Chuyển phát hỏa tốc(VHT)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Chuyển phát quốc tế nhanh(VGN)</Dropdown.Item></td>
                                        <td><Dropdown.Item>Dịch vụ vận tải hàng gom(VLG)</Dropdown.Item></td>
                                    </tr>
                                </tbody>                                
                            </Table>
                        </DropdownButton>
                        <DropdownButton class="head-menu-button" title="Tin tức">
                            <Dropdown.Item>Tin hoạt động</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Tin khuyến mãi</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Tin đấu thầu</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Hướng dẫn sử dụng</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton class="head-menu-button" title="Cổ đông">
                            <Dropdown.Item>Đại hội đồng cổ đông</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Điều lệ tổng công ty</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Báo cáo tài chính</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Báo cáo thường niên</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Báo cáo quản trị công ty</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Tin cổ đông</Dropdown.Item>
                        </DropdownButton>
                        <div class="head-menu-button"><Button>Tuyển dụng</Button></div>
                        <DropdownButton class="head-menu-button" title="Liên hệ">
                            <Dropdown.Item>Khiếu nại</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton class="head-menu-button" title="Hợp tác">
                            <Dropdown.Item>Đăng ký đại lý thu gom</Dropdown.Item>
                        </DropdownButton>
                        <TextField label="Tìm Kiếm" size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                        />                
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}

export default HeadMenu;