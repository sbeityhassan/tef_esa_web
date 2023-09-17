import React, { useState, useEffect } from 'react';
import './updatehome.css';
import SidebarAdmin from '../pages/SidebarAdmin.js';

function HomeUpdate() {
  const [exams, setExams] = useState('');
  const [body, setBody] = useState('');
  const [usefullinks, setUsefulLinks] = useState('');
  const [titlelink1, setTitleLink1] = useState('');
  const [link1, setLink1] = useState('');
  const [titlelink2, setTitleLink2] = useState('');
  const [link2, setLink2] = useState('');
  const [titlelink3, setTitleLink3] = useState('');
  const [link3, setLink3] = useState('');
  const [titlelink4, setTitleLink4] = useState('');
  const [link4, setLink4] = useState('');
  const [titlelink5, setTitleLink5] = useState('');
  const [link5, setLink5] = useState('');
  const [titlelink6, setTitleLink6] = useState('');
  const [link6, setLink6] = useState('');
  const [titlelink7, setTitleLink7] = useState('');
  const [link7, setLink7] = useState('');

  const [title, setTitle] = useState('');
  const [information, setInformation] = useState('');
  const [fees, setFees] = useState('');
  const [Currency, setCurrency] = useState('');
  const [link, setLink] = useState('');
  const [coursetitle, setCourseTitle] = useState('');
  const [courseinfo, setCourseInfo] = useState('');
  const [coursefees, setCourseFees] = useState('');
  const [courselink, setCourseLink] = useState('');
  const [coursecurrency, setCourseCurrency] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/course/courseinfo')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/home/homepage')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const item = data[0];
          setExams(item.exams);
          setBody(item.body);
          setUsefulLinks(item.usefullinks);
          setTitleLink1(item.titlelink1);
          setLink1(item.link1);
          setTitleLink2(item.titlelink2);
          setLink2(item.link2);
          setTitleLink3(item.titlelink3);
          setLink3(item.link3);
          setTitleLink4(item.titlelink4);
          setLink4(item.link4);
          setTitleLink5(item.titlelink5);
          setLink5(item.link5);
          setTitleLink6(item.titlelink6);
          setLink6(item.link6);
          setTitleLink7(item.titlelink7);
          setLink7(item.link7);
        }
      })
      .catch((error) => {
        console.error('Error fetching homepage data:', error);
      });

    fetch('http://localhost:8000/info/homeinfo')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const item = data[0];
          setTitle(item.title);
          setInformation(item.information);
          setFees(item.fees);
          setCurrency(item.currency);
          setLink(item.link);
          setCourseTitle(item.coursetitle);
          setCourseInfo(item.courseinfo);
          setCourseFees(item.coursefees);
          setCourseLink(item.courselink);
          setCourseCurrency(item.coursecurrency);
        }
      })
      .catch((error) => {
        console.error('Error fetching homeinfo data:', error);
      });
  }, []);

  const handleHomepageUpdate = () => {
    const updatedData = {
      exams,
      body,
      usefullinks,
      titlelink1,
      link1,
      titlelink2,
      link2,
      titlelink3,
      link3,
      titlelink4,
      link4,
      titlelink5,
      link5,
      titlelink6,
      link6,
      titlelink7,
      link7,
    };

    fetch('http://localhost:8000/home/homepage/:id', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Update error: ${response.status} ${response.statusText}`);
        }
        console.log('Update successful');
      })
      .catch((error) => {
        console.error('Error updating homepage data:', error);
      });
  };

  const handleHomeinfoUpdate = () => {
    const updatedData = {
      title,
      information,
      fees,
      Currency,
      link,
    };

    fetch('http://localhost:8000/info/homeinfo/:id', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Update error: ${response.status} ${response.statusText}`);
        }
        console.log('Update successful');
      })
      .catch((error) => {
        console.error('Error updating homeinfo data:', error);
      });
  };

  return (
    <div className="d-flex">
      <div>
        <SidebarAdmin />
      </div>

      <div className="home-update-container">
        <div className="section">
          <h1>Exams</h1>
          <div className="input-group">
            <div className='d-flex'>
              <div className="input-row">
                <label htmlFor="exams">Exams:</label>
                <input type="text" id="exams" value={exams} onChange={(e) => setExams(e.target.value)} />
              </div>
              <div className="input-row">
                <label htmlFor="body">Body:</label>
                <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} />
              </div>
            </div>
          </div>
          <button onClick={handleHomepageUpdate}>Update info</button>
        </div>
        <div className="section">
          <div className="linksection">
            <h1 className="col-md-6">Usefullinks</h1>
            <div className="row">
              <div className="input-group">
                <div className="input-row col-md-6">
                  <label htmlFor="usefullinks">Useful Links:</label>
                  <input type="text" id="usefullinks" value={usefullinks} onChange={(e) => setUsefulLinks(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink1">Title Link 1:</label>
                <input type="text" id="titlelink1" value={titlelink1} onChange={(e) => setTitleLink1(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link1">Link 1:</label>
                <input type="text" id="link1" value={link1} onChange={(e) => setLink1(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink2">Title Link 2:</label>
                <input type="text" id="titlelink2" value={titlelink2} onChange={(e) => setTitleLink2(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link2">Link 2:</label>
                <input type="text" id="link2" value={link2} onChange={(e) => setLink2(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink3">Title Link 3:</label>
                <input type="text" id="titlelink3" value={titlelink3} onChange={(e) => setTitleLink3(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link3">Link 3:</label>
                <input type="text" id="link3" value={link3} onChange={(e) => setLink3(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink4">Title Link 4:</label>
                <input type="text" id="titlelink4" value={titlelink4} onChange={(e) => setTitleLink4(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link4">Link 4:</label>
                <input type="text" id="link4" value={link4} onChange={(e) => setLink4(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink5">Title Link 5:</label>
                <input type="text" id="titlelink5" value={titlelink5} onChange={(e) => setTitleLink5(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link5">Link 5:</label>
                <input type="text" id="link5" value={link5} onChange={(e) => setLink5(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink6">Title Link 6:</label>
                <input type="text" id="titlelink6" value={titlelink6} onChange={(e) => setTitleLink6(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link6">Link 6:</label>
                <input type="text" id="link6" value={link6} onChange={(e) => setLink6(e.target.value)} />
              </div>
            </div>
            <div className="row">
              <div className="input-row col-md-6">
                <label htmlFor="titlelink7">Title Link 7:</label>
                <input type="text" id="titlelink7" value={titlelink7} onChange={(e) => setTitleLink7(e.target.value)} />
              </div>
              <div className="input-row col-md-6">
                <label htmlFor="link7">Link 7:</label>
                <input type="text" id="link7" value={link7} onChange={(e) => setLink7(e.target.value)} />
              </div>
            </div>
          </div>
          <button onClick={handleHomepageUpdate}>Update links</button>
        </div>
        <div className="section">
          <h1 className="col-md-6">Exams section</h1>
          <div className="row">
            <div className="input-row col-md-6">
              <label htmlFor="title">title:</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="input-row col-md-6">
              <label htmlFor="information">information:</label>
              <input type="text" id="information" value={information} onChange={(e) => setInformation(e.target.value)} />
            </div>
            <div className="input-row col-md-6">
              <label htmlFor="fees">fees:</label>
              <input type="text" id="fees" value={fees} onChange={(e) => setFees(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="input-row col-md-6">
              <label htmlFor="Currency">Currency:</label>
              <input type="text" id="Currency" value={Currency} onChange={(e) => setCurrency(e.target.value)} />
            </div>
            <div className="input-row col-md-6">
              <label htmlFor="link">link:</label>
              <input type="text" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>
          </div>
          <button onClick={handleHomeinfoUpdate}>Update exams</button>
        </div>
        <div className="section">
          <h1 className="col-md-6">Course section</h1>
          <div className="row">
            <div className="input-row col-md-6">
              <label htmlFor="coursetitle">coursetitle:</label>
              <input type="text" id="coursetitle" value={coursetitle} onChange={(e) => setCourseTitle(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="input-row col-md-6">
              <label htmlFor="courseinfo">courseinfo:</label>
              <input type="text" id="courseinfo" value={courseinfo} onChange={(e) => setCourseInfo(e.target.value)} />
            </div>
            <div className="input-row col-md-6">
              <label htmlFor="coursefees">coursefees:</label>
              <input type="text" id="coursefees" value={coursefees} onChange={(e) => setCourseFees(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="input-row col-md-6">
              <label htmlFor="courselink">courselink:</label>
              <input type="text" id="courselink" value={courselink} onChange={(e) => setCourseLink(e.target.value)} />
            </div>
            <div className="input-row col-md-6">
              <label htmlFor="coursecurrency">coursecurrency:</label>
              <input type="text" id="coursecurrency" value={coursecurrency} onChange={(e) => setCourseCurrency(e.target.value)} />
            </div>
          </div>
          <button>Update Course</button>
        </div>
      </div>
    </div>
  );
}

export default HomeUpdate;