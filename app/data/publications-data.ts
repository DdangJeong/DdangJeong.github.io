export type Publication = {
    id: number
    title: string
    authors: string
    conference: string
    year: number
    links?: {
      paper?: string
      code?: string
    }
    abstract: string
    mainFigure: string
  }

  export const internationalPublications: Publication[] = [
    {
      "id": 19,
      "title": "FUN-AD: Fully Unsupervised Learning for Anomaly Detection with Noisy Training Data",
      "authors": "Jiin Im*, Yongho Son* and Je Hyeong Hong",
      "conference": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2025",
      "year": 2025,
      "links": {
        "paper": "https://arxiv.org/abs/2411.16110",
        "code": "https://github.com/HY-Vision-Lab/FUNAD"
      },
      "abstract": "While the mainstream research in anomaly detection has mainly followed the one-class classification, practical industrial environments often incur noisy training data due to annotation errors or lack of labels for new or refurbished products. To address these issues, we propose a novel learning-based approach for fully unsupervised anomaly detection with unlabeled and potentially contaminated training data. Our method is motivated by two observations, that i) the pairwise feature distances between the normal samples are on average likely to be smaller than those between the anomaly samples or heterogeneous samples and ii) pairs of features mutually closest to each other are likely to be homogeneous pairs, which hold if the normal data has smaller variance than the anomaly data. Building on the first observation that nearest-neighbor distances can distinguish between confident normal samples and anomalies, we propose a pseudo-labeling strategy using an iteratively reconstructed memory bank (IRMB). The second observation is utilized as a new loss function to promote class-homogeneity between mutually closest pairs thereby reducing the ill-posedness of the task. Experimental results on two public industrial anomaly benchmarks and semantic anomaly examples validate the effectiveness of FUN-AD across different scenarios and anomaly-to-normal ratios.",
      "mainFigure": "/pub_img/FUNAD.png"
    },
    {
      id: 18,
      title: "Depth-Guided Privacy-Preserving Visual Localization Using 3D Sphere Clouds",
      authors: "Heejoon Moon, Jongwoo Lee, Jeong Gon Kim, and Je Hyeong Hong",
      conference: "British Machine Vision Conference (BMVC) 2024",
      year: 2024,
      links: {
        paper: "https://bmva-archive.org.uk/bmvc/2024/papers/Paper_267/paper.pdf",
        code: "https://github.com/PHANTOM0122/Sphere-cloud",
      },
      abstract: "The emergence of deep neural networks capable of revealing high-fidelity scene details from sparse 3D point clouds has raised significant privacy concerns in visual localization involving private maps. Lifting map points to randomly oriented 3D lines is a well-known approach for obstructing undesired recovery of the scene images, but these lines are vulnerable to a density-based attack that can recover the point cloud geometry by observing the neighborhood statistics of lines. With the aim of nullifying this attack, we present a new privacy-preserving scene representation called sphere cloud, which is constructed by lifting all points to 3D lines crossing the centroid of the map, resembling points on the unit sphere. Since lines are most dense at the map centroid, the sphere cloud misleads the density-based attack algorithm to incorrectly yield points at the centroid, effectively neutralizing the attack. Nevertheless, this advantage comes at the cost of i) a new type of attack that may directly recover images from this cloud representation and ii) unresolved translation scale for camera pose estimation. To address these issues, we introduce a simple yet effective cloud construction strategy to thwart new attacks and propose an efficient localization framework to guide the translation scale by utilizing absolute depth maps acquired from on-device time-of-flight (ToF) sensors. Experimental results on public RGB-D datasets demonstrate sphere cloud achieves competitive privacy-preserving ability and localization runtime while not excessively compromising the pose estimation accuracy compared to other depth-guided localization methods.",
      mainFigure: "/pub_img/BMVC2024.png",
    },
    {
      id: 17,
      title: "HoloGesture: A Multimodal Dataset for Hand Gesture Recognition Robust to Hand Textures on Head-Mounted Mixed-Reality Devices",
      authors: "Jeongwoo Park and Je Hyeong Hong",
      conference: "IEEE International Conference on Image Processing (ICIP) 2024",
      year: 2024,
      links: {
        paper: "https://ieeexplore.ieee.org/abstract/document/10648161",
        code: "https://github.com/hellojpark/hologesture/tree/main"
      },
      abstract: "While the recent development of high-performance mixed-reality (MR) devices is enabling their use in medical and industrial domains, this requires hand gesture recognition to be robust to different textures inflicted by gloves often worn for hygiene and safety purposes. Unfortunately, most existing hand gesture datasets are not captured using recent commercial MR devices, and none addresses the issue of wearing gloves in gesture recognition. We aim to fill these gaps by introducing a new dataset called HoloGesture, which comprises gesture clips acquired with and without latex gloves using Microsoft HoloLens 2. To leverage the multimodal nature of the latest MR device, we go beyond simply stacking RGB and depth frames and provide spatially aligned depth and RGB images. Experimental results show that i) incorporating gloves for training enhances robustness of gesture recognition to different hand textures, and ii) spatial alignment of RGB and depth images enhances the recognition accuracy.",
      mainFigure: "/pub_img/HoloGesture.png"
    },
    {
      id: 16,
      title: "Power Variable Projection for Initialization-Free Large-Scale Bundle Adjustment",
      authors: "Simon Weber, Je Hyeong Hong and Daniel Cremers",
      conference: "European Conference on Computer Vision (ECCV) 2024",
      year: 2024,
      links: {
        paper: "https://arxiv.org/abs/2405.05079",
      },
      abstract: "Most Bundle Adjustment (BA) solvers like the Levenberg-Marquardt algorithm require a good initialization. Instead, initialization-free BA remains a largely uncharted territory. The under-explored Variable Projection algorithm (VarPro) exhibits a wide convergence basin even without initialization. Coupled with object space error formulation, recent works have shown its ability to solve small-scale initialization-free bundle adjustment problems. To make such initialization-free BA approaches scalable, we introduce Power Variable Projection (PoVar), extending a recent inverse expansion method based on power series. Importantly, we link the power series expansion to Riemannian manifold optimization. This projective framework is crucial to solve large-scale bundle adjustment problems without initialization. Using the real-world BAL dataset, we experimentally demonstrate that our solver achieves state-of-the-art results in terms of speed and accuracy. To our knowledge, this work is the first to address the scalability of BA without initialization, opening new venues for initialization-free structure-from-motion.",
      mainFigure: "/pub_img/ECCV2024.png",
    },
    {
      id: 15,
      title: "Differentiating Loss of Consciousness Causes Through Artificial Intelligence-Enabled Decoding of Functional Connectivity",
      authors: "Young-Tak Kim, Hayom Kim, Mingyeong So, Jooheon Kong, Keun-Tae Kim, Je Hyeong Hong, Yunsik Son, Jaeson K. Sa, Synho Do, Jae-Ho Han, and Jung Bin Kim",
      conference: "NeuroImage, vol. 297, no. 1, 120749, Aug. 2024 (IF 4.7, Categorical JCR < 10%)",
      year: 2024,
      links: {
        paper: "https://www.sciencedirect.com/science/article/pii/S1053811924002465",
      },
      abstract: "Differential diagnosis of acute loss of consciousness (LOC) is crucial due to the need for different therapeutic strategies despite similar clinical presentations among etiologies such as nonconvulsive status epilepticus, metabolic encephalopathy, and benzodiazepine intoxication. While altered functional connectivity (FC) plays a pivotal role in the pathophysiology of LOC, there has been a lack of efforts to develop differential diagnosis artificial intelligence (AI) models that feature the distinctive FC change patterns specific to each LOC cause. Three approaches were applied for extracting features for the AI models: three-dimensional FC adjacency matrices, vectorized FC values, and graph theoretical measurements. Deep learning using convolutional neural networks (CNN) and various machine learning algorithms were implemented to compare classification accuracy using electroencephalography (EEG) data with different epoch sizes. The CNN model using FC adjacency matrices achieved the highest accuracy with an AUC of 0.905, with 20-s epoch data being optimal for classifying the different LOC causes. The high accuracy of the CNN model was maintained in a prospective cohort. Key distinguishing features among the LOC causes were found in the delta and theta brain wave bands. This research advances the understanding of LOC's underlying mechanisms and shows promise for enhancing diagnosis and treatment selection. Moreover, the AI models can provide accurate LOC differentiation with a relatively small amount of EEG data in 20-s epochs, which may be clinically useful.",
      mainFigure: "/pub_img/NeuroImage.png",
    },
    {
      id: 14,
      title: "Efficient Privacy-Preserving Visual Localization Using 3D Ray Clouds",
      authors: "Heejoon Moon, Chunghwan Lee and Je Hyeong Hong",
      conference: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2024",
      year: 2024,
      links: {
        paper: "https://openaccess.thecvf.com/content/CVPR2024/papers/Moon_Efficient_Privacy-Preserving_Visual_Localization_Using_3D_Ray_Clouds_CVPR_2024_paper.pdf",
        code: "https://github.com/PHANTOM0122/Ray-cloud",
      },
      abstract: "The recent success in revealing scene details from sparse 3D point clouds obtained via structure-from-motion has raised significant privacy concerns in visual localization. One prominent approach for mitigating this issue is to lift 3D points to 3D lines, thereby reducing the effectiveness of scene inversion attacks, but this comes at the cost of increased algorithmic complexity for camera localization due to weaker geometric constraints induced by line clouds. To overcome this limitation, we propose a new lifting approach called 'ray cloud', whereby each lifted 3D line intersects at one of two predefined locations, depicting omnidirectional rays from two cameras. This yields two benefits: i) camera localization can now be cast as relative pose estimation between the query image and the calibrated rig of two perspective cameras, which can be efficiently solved using a variant of the 5-point algorithm, and ii) the ray cloud introduces erroneous estimations for the density-based inversion attack, degrading the quality of scene recovery. Moreover, we explore possible modifications of the inversion attack to better recover scenes from the ray clouds and propose a ray sampling technique to reduce the effectiveness of the modified attack. Experimental results on two public datasets show real-time localization speed as well as enhanced privacy-preserving capability over the state-of-the-art without overly sacrificing localization accuracy.",
      mainFigure: "/pub_img/Raycloud.png",
    },
    {
      id: 13,
      title: "XMP: A Cross-Attention Multi-Scale Performer for File Fragment Classification",
      authors: "Jeonggyu Park, Sisung Liu and Je Hyeong Hong",
      conference: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP) 2024",
      year: 2024,
      links: {
        paper: "https://ieeexplore.ieee.org/document/10447626",
        code: "https://github.com/Jaden-kor/xmp",
      },
      abstract: "File fragment classification (FFC) is the task of identifying the file type given a small fraction of binary data, and serves a crucial role in digital forensics and cybersecurity. Recent studies have adopted convolutional neural networks (CNNs) for this problem, significantly improving the accuracy over the traditional methods relying on handcrafted features. In this paper, we aim to expand on the recent performance gain by better leveraging the large amount of digital files available for training. We propose to achieve this by employing a Transformer encoder-based network known for its weak inductive bias suited for large-scale training. Our model, XMP, is inspired by the CrossViT architecture for image recognition and utilizes multi-scale self and cross-attentions between CNN features extracted from the byte n-grams of input binary data. Experimental results on the latest public dataset show XMP achieving state-of-the-art accuracies in almost all scenarios without need for additional preprocessing of binary data such as bit shifting, demonstrating the effectiveness of the Transformer-based architecture for FFC. The benefit of each proposed component is assessed through ablation study.",
      mainFigure: "/pub_img/XMP.jpg",
    },
    {
      id: 12,
      title: "Paired-Point Lifting for Enhanced Privacy-Preserving Visual Localization",
      authors: "Chunghwan Lee, Jaihoon Kim, Chanhyuk Yun and Je Hyeong Hong",
      conference: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2023",
      year: 2023,
      links: {
        paper: "https://openaccess.thecvf.com/content/CVPR2023/papers/Lee_Paired-Point_Lifting_for_Enhanced_Privacy-Preserving_Visual_Localization_CVPR_2023_paper.pdf",
        code: "https://github.com/Fusroda-h/ppl",
      },
      abstract: "Visual localization refers to the process of recovering camera pose from input image relative to a known scene, forming a cornerstone of numerous vision and robotics systems. While many algorithms utilize sparse 3D point cloud of the scene obtained via structure-from-motion (SfM) for localization, recent studies have raised privacy concerns by successfully revealing high-fidelity appearance of the scene from such sparse 3D representation. One prominent approach for bypassing this attack was to lift 3D points to randomly oriented 3D lines thereby hiding scene geometry, but latest work have shown such random line cloud has a critical statistical flaw that can be exploited to break through protection. In this work, we present an alternative lightweight strategy called Paired-Point Lifting (PPL) for constructing 3D line clouds. Instead of drawing one randomly oriented line per 3D point, PPL splits 3D points into pairs and joins each pair to form 3D lines. This seemingly simple strategy yields 3 benefits, i) new ambiguity in feature selection, ii) increased line cloud sparsity and iii) non-trivial distribution of 3D lines, all of which contributes to enhanced protection against privacy attacks. Extensive experimental results demonstrate the strength of PPL in concealing scene details without compromising localization accuracy, unlocking the true potential of 3D line clouds.",
      mainFigure: "/pub_img/PPL.jpg",
    },
    {
      id: 11,
      title: "Structure-from-Sherds: Incremental 3D Reassembly of Axially Symmetric Pots from Unordered and Mixed Fragment Collections",
      authors: "J.H. Hong*†, S.J. Yoo*, M.Z. Arshad, Y.M. Kim and J. Kim†",
      conference: "IEEE/CVF International Conference on Computer Vision (ICCV) 2021",
      year: 2021,
      links: {
        paper: "https://openaccess.thecvf.com/content/ICCV2021/papers/Hong_Structure-From-Sherds_Incremental_3D_Reassembly_of_Axially_Symmetric_Pots_From_Unordered_ICCV_2021_paper.pdf",
        code: "https://github.com/SeongJong-Yoo/structure-from-sherds",
      },
      abstract: "Re-assembling multiple pots accurately from numerous 3D scanned fragments remains a challenging task to this date. Previous methods extract all potential matching pairs of pot sherds and consider them simultaneously to search for an optimal global pot configuration. In this work, we empirically show such a global approach greatly suffers from false positive matches between sherds inflicted by indistinctive sharp fracture surfaces in pot fragments. To mitigate this problem, we take inspiration from the field of structure-from-motion (SfM), where many pipelines have matured in reconstructing a 3D scene from multiple images. Motivated by the success of the incremental approach in robust SfM, we present an efficient reassembly method for axially symmetric pots based on iterative registration of one sherd at a time. Our method goes beyond replicating incremental SfM and addresses indistinguishable false matches by embracing beam search to explore multitudes of registration possibilities. Additionally, we utilize multiple roots in each step to allow simultaneous reassembly of multiple pots. The proposed approach shows above 80% reassembly accuracy on a dataset of real 80 fragments mixed from 5 pots, pushing the state-of-the-art and paving the way towards the goal of large-scale pot reassembly.",
      mainFigure: "/pub_img/SFS.gif",
    },
    {
      id: 10,
      title: "A 3D model-based approach for fitting masks to faces in the wild",
      authors: "J.H. Hong*, H. Kim*, M. Kim, G.P. Nam, J. Cho, H. Ko and I.-J. Kim",
      conference: "IEEE International Conference on Image Processing (ICIP) 2021",
      year: 2021,
      links: {
        paper: "https://ieeexplore.ieee.org/document/9506069",
        code: "https://github.com/jhh37/wearmask3d",
      },
      abstract: "Face recognition now requires a large number of labelled masked face images in the era of this unprecedented COVID19 pandemic. Unfortunately, the rapid spread of the virus has left us little time to prepare for such dataset in the wild. To circumvent this issue, we present a 3D model-based approach called WearMask3D for augmenting face images of various poses to the masked face counterparts. Our method proceeds by first fitting a 3D morphable model on the input image, second overlaying the mask surface onto the face model and warping the respective mask texture, and last projecting the 3D mask back to 2D. The mask texture is adapted based on the brightness and resolution of the input image. By working in 3D, our method can produce more natural masked faces of diverse poses from a single mask texture. To compare precisely between different augmentation approaches, we have constructed a dataset comprising masked and unmasked faces with labels called MFW-mini. Experimental results demonstrate WearMask3D produces more realistic masked faces, and utilizing these images for training leads to state-of-the-art recognition accuracy for masked faces.",
      mainFigure: "/pub_img/ICIP2021.png",
    },
    {
      id: 9,
      title: "A Unified Method for Robust Self-Calibration of 3-D Field Sensor Arrays",
      authors: "J.H. Hong, D. Kang and I.-J. Kim",
      conference: "IEEE Transactions on Instrumentation and Measurement (2021, IF 5.33, Categorical JCR < 13.3%)",
      year: 2021,
      links: {
        paper: "https://ieeexplore.ieee.org/document/9399492",
      },
      abstract: "Self-calibrating an array of 3-D field sensors, such as three-axis magnetometers and accelerometers, requires estimation of two variable sets—each sensor's intrinsic model that maps its input field to the corresponding measurement and each sensor's coordinates relative to a common frame of reference within the array. In this work, we propose the first unified self-calibration method for arrays of same-type 3-D field sensors, which is robust to anomalous sensor measurements unlike previous algorithms. The method breaks down the array calibration task into three steps of more easily subproblems: first estimating the intrinsic variables of each sensor independently, second computing the sensor coordinates with respect to a common reference frame, and last refining both these intrinsics and orientations jointly to minimize physically meaningful sensor estimation errors. Each stage has been carefully designed to maintain robustness to anomalies without compromising estimation quality. The performance of our method is compared against other state-of-the-art algorithms on both simulation and real data from a magnetometer array and accelerometer array, demonstrating significant improvements in accuracy and precision of the estimated array variables in versatile real-world self-calibration environments.",
      mainFigure: "/pub_img/TIM2021.png",
    },
    {
      id: 8,
      title: "Robust Autocalibration of Triaxial Magnetometers",
      authors: "J.H. Hong, D. Kang and I.-J. Kim",
      conference: "IEEE Transactions on Instrumentation and Measurement (2021, IF 5.33, Categorical JCR < 13.3%)",
      year: 2021,
      links: {
        paper: "https://ieeexplore.ieee.org/document/9246556",
      },
      abstract: "Self-calibration of a magnetometer usually requires a controlled magnetic environment as the calibration output can be affected by field distortions from nearby magnetic objects. In this article, we develop a two-stage method that can accurately self-calibrate magnetometer from measurements containing anomalous readings due to local magnetic disturbances. The method proceeds by robustly fitting an ellipsoid to measurement data via L1-norm convex optimization, yielding initial model variables that are less prone to magnetic disruptions. These are then served as a starting point for robust nonlinear least-squares optimization, which refines the magnetometer model to minimize sensor estimation errors while suppressing heavy anomalies. Synthetic and real experimental results are provided to demonstrate improved accuracy of the proposed method in the presence of outliers. We additionally show empirically that the method is directly applicable to self-calibration of three-axis accelerometers.",
      mainFigure: "/pub_img/TIM2021_2.png",
    },
    {
      id: 7,
      title: "3D Pots Configuration System by Optimizing Over Geometric Constraints",
      authors: "J.E. Kim, M.Z. Arshad, S.J. Yoo, J.H. Hong, J. Kim and Y.M. Kim",
      conference: "International Conference and Pattern Recognition (ICPR) 2020",
      year: 2020,
      links: {
        paper: "https://ieeexplore.ieee.org/document/9412372",
      },
      abstract: "While potteries are common artifacts excavated in archaeological sites, the restoration process relies on manual cleaning and reassembly of shattered pieces. Since the number of possible 3D configurations is considerably large, the exhaustive manual trial may result in abrasion on fractured surfaces and even failure to find the correct matches. As a result, many recent works suggest virtual reassembly from 3D scans of the fragments. The problem is challenging in the view of the conventional 3D geometric analysis, as it is hard to extract reliable shape features from the thin break lines. We propose to optimize for the global configuration by combining geometric constraints with information from noisy shape features. Specifically, we enforce bijection and continuity of sequence of correspondences given estimates of corners and pair-wise matching scores between multiple break lines. We demonstrate that our pipeline greatly increases the accuracy of correspondences, resulting in stable restoration of 3D configurations from irregular and noisy evidence.",
      mainFigure: "/pub_img/ICPR2020.png",
    },
    {
      id: 6,
      title: "POP: A Generic Framework for Real-time Pose Estimation of Planar Objects",
      authors: "S. Chae, J.H. Hong, H. Choi and I.-J. Kim",
      conference: "IEEE Access (2020, SCIE)",
      year: 2020,
      links: {
        paper: "https://ieeexplore.ieee.org/document/9180252",
      },
      abstract: "Accurate pose estimation of planar objects is a key computation in visual localization tasks, with recent studies showing remarkable progress on a handful of baseline datasets. Nonetheless, achieving similar performance on sequences in unconstrained environments is still an ongoing quest to be accomplished, largely due to the existence of several sources of errors, which are correlated but often only partly tackled in the literature. In this article, we propose POP, a generic real-time planar-object pose-estimation framework which is designed to handle the aforementioned types of errors while not losing generality to a specific choice of keypoint detection or tracking algorithm. The essence of POP lies in activating keypoint detection module in the background as well as adding several refinement steps in order to reduce correlated sources of errors within the pipeline. We provide extensive experimental evaluations against state-of-the-art planar object tracking algorithms on baseline and more challenging datasets, empirically demonstrating the effectiveness of the POP framework for scenes with large environmental variations.",
      mainFigure: "/pub_img/Access2020.PNG",
    },
    {
      id: 5,
      title: "PotSAC: A Robust Axis Estimator for Axially Symmetric Pot Fragments",
      authors: "J.H. Hong, Y.M. Kim, K.-C. Wi and J. Kim",
      conference: "IEEE/CVF International Conference on Computer Vision 2019 Workshop (ICCVW) on E-Heritage (oral)",
      year: 2019,
      links: {
        paper: "https://ieeexplore.ieee.org/document/9022556",
      },
      abstract: "The task of virtually reassembling an axially symmetric pot from its fragments can be greatly simplified by utilizing the constraints induced by the pot's axis of symmetry. This requires accurate estimation of the axis for each sherd, whose 3D data typically contain gross outliers arising from surface artifacts, noisy surface normals and unfiltered data along the break surface. In this work, we propose a simple two-stage robust axis estimator, PotSAC, which is based on a variant of the random sample consensus (RANSAC) algorithm followed by robust nonlinear least squares refinement. Unlike previous work which have either compensated the axis estimation accuracy for robustness against outliers or vice versa, our method can handle the aforementioned outlier sources without compromising its accuracy. This is achieved by carefully designing the method to combine and extend the advantage of each key prior work. Experimental results on real scanned fragments demonstrate the effectiveness of our method, paving the way towards high quality reassembly of symmetric potteries.",
      mainFigure: "/pub_img/Potsac.PNG",
    },
    {
      id: 4,
      title: "pOSE: Pseudo Object Space Error for Initialization-Free Bundle Adjustment",
      authors: "J.H. Hong and C. Zach",
      conference: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2018",
      year: 2018,
      links: {
        paper: "https://openaccess.thecvf.com/content_cvpr_2018/papers/Hong_pOSE_Pseudo_Object_CVPR_2018_paper.pdf",
      },
      abstract: "Bundle adjustment is a nonlinear refinement method for camera poses and 3D structure requiring sufficiently good initialization. In recent years, it was experimentally observed that useful minima can be reached even from arbitrary initialization for affine bundle adjustment problems (and fixed-rank matrix factorization instances in general). The key success factor lies in the use of the variable projection (VarPro) method, which is known to have a wide basin of convergence for such problems. In this paper, we propose the Pseudo Object Space Error (pOSE), which is an objective with cameras represented as a hybrid between the affine and projective models. This formulation allows us to obtain 3D reconstructions that are close to the true projective reconstructions while retaining a bilinear problem structure suitable for the VarPro method. Experimental results show that using pOSE has a high success rate to yield faithful 3D reconstructions from random initializations, taking one step towards initialization-free structure from motion.",
      mainFigure: "/pub_img/pOSE.PNG",
    },
    {
      id: 3,
      title: "Revisiting the Variable Projection Method for Separable Nonlinear Least Squares Problems",
      authors: "J.H. Hong, C. Zach and A.W. Fitzgibbon",
      conference: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2017",
      year: 2017,
      links: {
        paper: "https://openaccess.thecvf.com/content_cvpr_2017/papers/Hong_Revisiting_the_Variable_CVPR_2017_paper.pdf",
      },
      abstract: "This paper revisits the variable projection (VarPro) method for separable nonlinear least squares (SNLS) problems. VarPro is a framework to solve optimization problems efficiently by optimally eliminating a subset of the unknowns. It is particularly adapted for SNLS problems, including low-rank matrix factorization with missing data and affine bundle adjustment. VarPro-based methods have gained significant attention over the last decade due to their experimentally observed large convergence basin for certain problem classes, providing a clear advantage over standard methods based on joint optimization of all unknowns. However, the literature lacks clear explanations for why VarPro outperforms other methods and why joint optimization, successful in many computer vision tasks, struggles with these problems. Additionally, VarPro has primarily been tested on small to medium-sized datasets, raising questions about its scalability. This paper aims to address these unsolved puzzles.",
      mainFigure: "/pub_img/CVPR2017.PNG",
    },
    {
      id: 2,
      title: "Projective Bundle Adjustment from Arbitrary Initialization using the Variable Projection Method",
      authors: "J.H. Hong, C. Zach, A.W. Fitzgibbon and R. Cipolla",
      conference: "European Conference on Computer Vision (ECCV) 2016",
      year: 2016,
      links: {
        paper: "https://link.springer.com/chapter/10.1007/978-3-319-46448-0_29",
      },
      abstract: "Bundle adjustment is used in structure-from-motion pipelines as a final refinement stage requiring a sufficiently good initialization to reach a useful local minimum. Starting from an arbitrary initialization almost always gets trapped in a poor minimum. In this work, we aim to obtain an initialization-free approach which returns global minima from a large proportion of purely random starting points. Our key inspiration lies in the success of the Variable Projection (VarPro) method for affine factorization problems, which have close to 100% chance of reaching a global minimum from random initialization. We find empirically that this desirable behavior does not directly carry over to the projective case, and we consequently design and evaluate strategies to overcome this limitation. Also, by unifying the affine and the projective camera settings, we obtain numerically better conditioned reformulations of original bundle adjustment algorithms.",
      mainFigure: "/pub_img/ECCV2016.PNG",
    },
    {
      id: 1,
      title: "Secrets of Matrix Factorization: Approximations, Numerics, Manifold Optimization and Random Restarts",
      authors: "J.H. Hong and A.W. Fitzgibbon",
      conference: "IEEE International Conference on Computer Vision (ICCV) 2015",
      year: 2015,
      links: {
        paper: "https://openaccess.thecvf.com/content_iccv_2015/papers/Hong_Secrets_of_Matrix_ICCV_2015_paper.pdf",
      },
      abstract: "Matrix factorization (or low-rank matrix completion) with missing data is a key computation in many computer vision and machine learning tasks, and is also related to a broader class of nonlinear optimization problems such as bundle adjustment. The problem has received much attention recently, with renewed interest in variable-projection approaches, yielding dramatic improvements in reliability and speed. However, on a wide class of problems, no one approach dominates, and because the various approaches have been derived in a multitude of different ways, it has been difficult to unify them. This paper provides a unified derivation of a number of recent approaches, so that similarities and differences are easily observed. We also present a simple meta-algorithm which wraps any existing algorithm, yielding 100% success rate on many standard datasets. Given 100% success, the focus of evaluation must turn to speed, as 100% success is trivially achieved if we do not care about speed. Again our unification allows a number of generic improvements applicable to all members of the family to be isolated, yielding a unified algorithm that outperforms our re-implementation of existing algorithms, which in some cases already outperform the original authors' publicly available codes.",
      mainFigure: "/pub_img/ICCV2015.PNG",
    },
  ]
  